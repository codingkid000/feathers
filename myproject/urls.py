"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('all_users/', views.all_users, name='all_users'),
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('home/', views.home, name='home'),
    path('', views.admin_home, name='admin_home'),
    path('member/', views.member, name='member'),  
    path('all_projects/',views.all_projects,name='all_projects'),
    path('project_create/',views.project_create,name='project_create'),
    path("project_edit/<int:id>",views.project_edit,name="project_edit"),
    path("project_delete/<int:id>",views.project_delete,name="project_delete"),
    path("project_name/<int:id>",views.project_name,name="project_name"),
    path("Labour_create/",views.Labour_create,name="Labour_create")
]
