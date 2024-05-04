from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import *
from django import forms

class RegisterForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2','role')

class LoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')
        
class ProjectsDetailsForm(forms.ModelForm):
    class Meta:
        model = ProjectsDetails
        fields = "__all__"
        
        
class LabourDetailsForm(forms.ModelForm):
    class Meta:
        model = LabourDetails
        fields = "__all__"


class MaterialsDetailsForm(forms.ModelForm):
    class Meta:
        model = MaterialsDetails
        fields = "__all__"


class AdditionalDetailsForm(forms.ModelForm):
    class Meta:
        model = AdditionalDetails
        fields = "__all__"
