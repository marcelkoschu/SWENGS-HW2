from django.contrib import admin
from computermanager.computers.models import Computer


# Register your models here.

class ComputerAdmin(admin.ModelAdmin):
    list_display = ('vendor', 'model')
    search_fields = ('vendor', 'model')


admin.site.register(Computer, ComputerAdmin)



