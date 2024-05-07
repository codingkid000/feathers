from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import *
from django import forms

class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = CustomUser
        fields = ('username',"email",'password1', 'password2','role')

class LoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')
        
class ProjectsDetailsForm(forms.ModelForm):
    class Meta:
        model = ProjectsDetails
        fields = "__all__"
        
    active_field = forms.BooleanField(required=False,widget=forms.CheckboxInput(attrs={'class':'form-check-input'}))
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for visible in self.visible_fields():
           if visible.name != 'active_field':
            visible.field.widget.attrs['class'] = 'form-control'    
        
        
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
