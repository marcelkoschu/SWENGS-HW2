# Generated by Django 3.0.2 on 2020-01-11 15:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('computermanager', '0005_auto_20200110_2029'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shop',
            name='current_sales',
        ),
        migrations.AddField(
            model_name='shop',
            name='employee_count',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
