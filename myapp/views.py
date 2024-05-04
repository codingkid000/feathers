from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect,get_object_or_404
from .forms import *
from django.contrib import messages
from myapp.models import *
import json
import datetime
from django.http import JsonResponse
from django.http import HttpResponse

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            print(form.errors)
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
            form = LoginForm(request.POST)
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None and user.check_password(password):
                login(request, user)
                if user.role=="user":
                    return redirect('home')
                elif user.role=="admin":
                    return redirect("admin_home")
                elif user.role=="member":
                    return redirect("member")
            else:
    
                try:
                    user=CustomUser.objects.get(username=username)
                except:
                    messages.error(request,"invalid username")  
                else:
                    messages.error(request,"invalid pasword")        
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

@login_required
def user_logout(request):
    logout(request)
    return redirect("login")

def home(request):
    return render(request,"home.html")

def admin_home(request):
    usr=CustomUser.objects.all()
    details=ProjectsDetails.objects.all()
    labour=LabourDetails.objects.all()
    mt=MaterialsDetails.objects.all()
    add=AdditionalDetails.objects.all()
    return render(request,"admin_home.html",locals())

def member(request):
    return render(request,"member.html")

def project_create(request):
    if request.method == "POST": 
        form=ProjectsDetailsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("admin_home")
    else:
        form=ProjectsDetailsForm()
    return render(request,"project_create.html",{"form":form})
     

def project_edit(request,id):
    contact=get_object_or_404(ProjectsDetails, id=id)
    if request.method == "POST":
        form=ProjectsDetailsForm(request.POST, instance=contact)
        if form.is_valid():
                form.save()
                return redirect("admin_home")
    else:
        form=ProjectsDetailsForm(instance=contact)
    return render(request,"project_edit.html",{"form":form, "contact":contact})

                                                                                                                                                                   
def project_delete(request,id): 
    form=get_object_or_404(ProjectsDetails, id=id)
    if request.method=="POST":
        form.delete()
        return redirect("admin_home")
    return render(request,"project_delete.html",{"form":form})


def Labour_create(request):
    if request.method == "POST": 
        form=LabourDetailsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("admin_home")
    else:
        form=LabourDetailsForm()
    return render(request,"Labour_create.html",{"form":form})
     

def Labour_edit(request,id):
    contact=get_object_or_404(ProjectsDetails, id=id)
    if request.method == "POST":
        form=ProjectsDetailsForm(request.POST, instance=contact)
        if form.is_valid():
                form.save()
                return redirect("admin_home")
    else:
        form=ProjectsDetailsForm(instance=contact)
    return render(request,"Labour_edit.html",{"form":form, "contact":contact})

                                                                                                                                                                   
def Labour_delete(request,id): 
    form=get_object_or_404(ProjectsDetails, id=id)
    if request.method=="POST":
        form.delete()
        return redirect("admin_home")
    return render(request,"Labour_delete.html",{"form":form})



def Materials_create(request):
    if request.method == "POST": 
        form=LabourDetailsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("admin_home")
    else:
        form=LabourDetailsForm()
    return render(request,"Materials_create.html",{"form":form})
     

def Materials_edit(request,id):
    contact=get_object_or_404(ProjectsDetails, id=id)
    if request.method == "POST":
        form=ProjectsDetailsForm(request.POST, instance=contact)
        if form.is_valid():
                form.save()
                return redirect("admin_home")
    else:
        form=ProjectsDetailsForm(instance=contact)
    return render(request,"Materials_edit.html",{"form":form, "contact":contact})

                                                                                                                                                                   
def Materials_delete(request,id): 
    form=get_object_or_404(ProjectsDetails, id=id)
    if request.method=="POST":
        form.delete()
        return redirect("admin_home")
    return render(request,"Materials_delete.html",{"form":form})


def Additional_create(request):
    if request.method == "POST": 
        form=LabourDetailsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("admin_home")
    else:
        form=LabourDetailsForm()
    return render(request,"Additional_create.html",{"form":form})
     

def Additional_edit(request,id):
    contact=get_object_or_404(ProjectsDetails, id=id)
    if request.method == "POST":
        form=ProjectsDetailsForm(request.POST, instance=contact)
        if form.is_valid():
                form.save()
                return redirect("admin_home")
    else:
        form=ProjectsDetailsForm(instance=contact)
    return render(request,"Additional_edit.html",{"form":form, "contact":contact})

                                                                                                                                                                   
def Additional_delete(request,id): 
    form=get_object_or_404(ProjectsDetails, id=id)
    if request.method=="POST":
        form.delete()
        return redirect("admin_home")
    return render(request,"Additional_delete.html",{"form":form})

def project_name(request,id):
    pro=ProjectsDetails.objects.filter(id=id)
    labour=LabourDetails.objects.filter(user_id=id)
    mt=MaterialsDetails.objects.filter(user_id=id)
    return render(request,"project_name.html",locals())
     
def all_projects(request):
    
    return render(request,'all_projects.html')

def all_users(request):
    
    return render(request,'users.html')









