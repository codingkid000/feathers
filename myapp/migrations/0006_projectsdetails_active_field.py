# Generated by Django 5.0.4 on 2024-05-06 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_alter_projectsdetails_invoice_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectsdetails',
            name='active_field',
            field=models.BooleanField(null=True),
        ),
    ]
