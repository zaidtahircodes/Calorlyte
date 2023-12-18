from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSeralizer, LoginSerializer, RegisterSerializer, BMISeralizer
from .models import BMI

# Create your views here.

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Get the data in API request body
        serializer = RegisterSerializer(data=request.data)

        # Check if the data inputted is valid and create the auth token and send it to the client
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        # Check if the request data is valid and authenticate it
        if serializer.is_valid():
            user = authenticate(
                username = serializer.validated_data['username'],
                password=serializer.validated_data['password']
            )
            # once authtenicated log user in and create the token
            if user:
                login(request, user)
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        logout(request)
        return Response("brrrrr", status=status.HTTP_200_OK)

class calcBMI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = BMISeralizer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
        
     # update BMI   
    def put(self, request):
        try:
            bmi = BMI.objects.get(user=request.user)
        except BMI.DoesNotExist:
            return Response({'error': 'bmi for this user does not exist yet'})

        serializer = BMISeralizer(bmi, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=400)

     # get BMI data   
    def get(self, request):
        try:
            bmi = BMI.objects.get(user=request.user)
        except BMI.DoesNotExist:
            return Response({'error': 'bmi for this user does not exist yet'})

        serializer = BMISeralizer(bmi)
        return Response(serializer.data, status=200)
    # send back data(bmi calculation and how underweight) in json form