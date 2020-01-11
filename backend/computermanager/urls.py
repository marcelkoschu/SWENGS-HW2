from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token

from computermanager import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('vendor/options', views.vendor_option_list),
    path('shop/options', views.shop_option_list),
    path('computer/list', views.computer_list),
    path('computer/create', views.computer_form_create),
    path('computer/<int:pk>/get', views.computer_form_get),
    path('computer/<int:pk>/update', views.computer_form_update),
    path('computer/<int:pk>/delete', views.computer_delete),

    path('shop/list', views.shop_list),
    path('shop/create', views.shop_form_create),
    path('shop/<int:pk>/get', views.shop_form_get),
    path('shop/<int:pk>/update', views.shop_form_update),
    path('shop/<int:pk>/delete', views.shop_delete),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
