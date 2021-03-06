from django.db import models


class Vendor(models.Model):
    name = models.TextField()
    headquarter = models.TextField(null=True)
    current_employees = models.IntegerField()
    current_sales = models.DecimalField(decimal_places=2, max_digits=50)
    isPartner = models.BooleanField()

    def __str__(self):
        return self.name

    @classmethod
    def create(cls, name, head, curr_e, curr_s, partner):
        vendor = cls(name=name, headquarter=head, current_employees=curr_e, current_sales=curr_s, isPartner=partner)
        return vendor





class Computer(models.Model):
    model = models.TextField()
    release_date = models.DateField()
    description = models.TextField()
    storage = models.PositiveIntegerField(help_text='in GB')
    isEnterpriseModel = models.BooleanField()
    # One Vendor has many computers - OneToMany Relationship
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, null=False)
    # Computer can be buyed in many shops, shop can have many computers - ManyToMany Relationship
    sold_at = models.ManyToManyField('Shop', blank=True, related_name='computers')

    def __str__(self):
        return self.model


class Shop(models.Model):
    name = models.TextField()
    address = models.TextField()
    postal_code = models.IntegerField()
    sales_manager = models.TextField()
    employee_count = models.IntegerField()
    is_open = models.BooleanField()

    def __str__(self):
        return self.name
