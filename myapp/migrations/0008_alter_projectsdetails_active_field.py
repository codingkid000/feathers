# Generated by Django 5.0.4 on 2024-05-06 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_alter_projectsdetails_active_field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectsdetails',
            name='active_field',
            field=models.BooleanField(default=False, null=True),
        ),
    ]