from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('user', 'User'),
        ("member","Member"),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES,default="user")
    mypassword=models.CharField(max_length=100,null=True,blank=True)
    active_choice=[
        ('active','Active'),
        ("inactive","Inactive"),
    ]
  
    active=models.CharField(max_length=100,null=True,blank=True,default="active")
    
    
    class Meta:
        unique_together = ('username', 'email')
        swappable = 'AUTH_USER_MODEL'
CustomUser._meta.get_field('groups').remote_field.related_name = 'customuser_set'
CustomUser._meta.get_field('user_permissions').remote_field.related_name = 'customuser_set'



class ProjectsDetails(models.Model):
    all_users=models.CharField(max_length=100,null=True,blank=True)
    project_name=models.CharField(max_length=100)
    project_cost=models.IntegerField(null=True)
    invoice_number=models.CharField(max_length=100,null=True,blank=True)
    invoice_date=models.DateField(auto_now_add=True,null=True,blank=True)
    project_cost_paid=models.IntegerField(null=True)
    active_field = models.BooleanField(default=False,null=True)
    at=models.CharField(max_length=100,null=True,blank=True)
    
class LabourDetails(models.Model):
    user=models.ForeignKey(ProjectsDetails,on_delete=models.CASCADE,null=True,blank=True)
    labour_category_add=models.CharField(max_length=100,null=True,blank=True)
    labour_works=models.CharField(max_length=100,null=True,blank=True)
    salary=models.CharField(max_length=100,null=True,blank=True)
    mydate=models.DateField(auto_now_add=True,null=True,blank=True)
    qut=models.IntegerField(null=True,blank=True)
    
class MaterialsDetails(models.Model):
    user=models.ForeignKey(ProjectsDetails,on_delete=models.CASCADE,null=True,blank=True)
    material_category_add=models.CharField(max_length=100,null=True,blank=True)
    material_works=models.CharField(max_length=100,null=True,blank=True)
    material_cost=models.CharField(max_length=100,null=True,blank=True)
    material_quandity=models.CharField(max_length=100,null=True,blank=True)

class AdditionalDetails(models.Model):
    user=models.ForeignKey(ProjectsDetails,on_delete=models.CASCADE,null=True,blank=True)
    additional_category_add=models.CharField(max_length=100,null=True,blank=True)
    additional_works=models.CharField(max_length=100,null=True,blank=True)
    additional_cost=models.CharField(max_length=100,null=True,blank=True)
    aditional_quandity=models.CharField(max_length=100,null=True,blank=True)


