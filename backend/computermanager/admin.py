from django.contrib import admin

from computermanager.models import Computer, Shop, Vendor


class ComputerAdmin(admin.ModelAdmin):
    list_filter = ('model',)


class ShopAdmin(admin.ModelAdmin): pass


class VendorAdmin(admin.ModelAdmin): pass


admin.site.register(Computer, ComputerAdmin)
admin.site.register(Shop, ShopAdmin)
admin.site.register(Vendor, VendorAdmin)
