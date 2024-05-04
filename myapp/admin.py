from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(ProjectsDetails)
admin.site.register(LabourDetails)
admin.site.register(AdditionalDetails)
admin.site.register(MaterialsDetails)
