from .models import User, BMI
from rest_framework import serializers

class UserSeralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class BMISeralizer(serializers.ModelSerializer):
    class Meta:
        model = BMI
        fields = ['age', 'weight', 'height', 'bmi']
        read_only_fields = ['bmi']

        

    def create(self, validated_data):
        height = validated_data['height']
        weight = validated_data['weight']
        bmi = weight / (height * height)

        validated_data['bmi'] = bmi
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        instance.height = validated_data.get('height', instance.height)
        instance.weight = validated_data.get('weight', instance.weight)
        instance.bmi = instance.weight / (instance.height * instance.height)
        instance.save()

        return super().update(instance, validated_data)