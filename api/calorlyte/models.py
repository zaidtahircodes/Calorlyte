from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class BMI(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    age = models.IntegerField()
    weight = models.FloatField() # In kilograms(kg)
    height = models.FloatField() # In metres(M)
    bmi = models.FloatField() # calculated BMI
