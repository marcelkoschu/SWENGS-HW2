from django.db import models


# Create your models here.


class Computer(models.Model):
    VENDORS = (
        ('Apple', 'Apple'),
        ('HP','HP'),
        ('Dell', 'Dell'),
        ('Lenovo', 'Lenovo')
    )
    vendor = models.TextField(choices=VENDORS)
    model = models.TextField()
    build_date = models.DateField(null=True)
    storage_capacity_GB = models.PositiveIntegerField(null=True)
    isEnterpriseModel = models.BooleanField(default=False)
    price = models.DecimalField(decimal_places=2, max_digits=8, null=True)

    def __str__(self):
        return self.vendor + " " + self.model
