from django.conf.urls import url

from . import views

app_name = 'campingbike'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^familiar', views.familiar, name='familiar'),
    url(r'^parelles', views.parelles, name='parelles'),
    url(r'^endurance', views.endurance, name='endurance'),
    url(r'^maps$', views.maps, name='maps'),
    url(r'^experiencies', views.experiencies, name='experiencies'),
]