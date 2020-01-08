from django.db import models


class Vendor(models.Model):
    name = models.TextField()
    headquarter = models.TextField(null=True)
    current_employees = models.IntegerField()
    isPartner = models.BooleanField()

    def __str__(self):
        return self.name


class Computer(models.Model):
    model = models.TextField()
    release_date = models.DateField()
    description = models.TextField()
    storage = models.PositiveIntegerField(help_text='in GB')
    isEnterpriseModel = models.BooleanField()
    # One Vendor has many computers - OneToMany Relationship
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, null=False)
    # Computer can be buyed in many shops, shop can have many computers - ManyToMany Relationship
    selled_at = models.ManyToManyField('Shop', blank=True)

    def __str__(self):
        return self.model


class Shop(models.Model):
    location = models.TextField()
    sales_manager = models.TextField()
    postal_code = models.IntegerField()
    offered = models.CharField

    def __str__(self):
        return '%s %s (%s)' % (self.location, self.sales_manager, self.postal_code)
