# Generated by Django 2.2.6 on 2019-11-05 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('computers', '0004_auto_20191105_1525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='computer',
            name='build_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='computer',
            name='isEnterpriseModel',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='computer',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=8, null=True),
        ),
        migrations.AlterField(
            model_name='computer',
            name='storage_capacity_GB',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
