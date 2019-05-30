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
    url(r'^lloguer', views.lloguer, name='lloguer'),
    url(r'^politica', views.politica, name='politica'),
    # Urls per M04
    url(r'^descarrega', views.descarrega, name='descarrega'),
    url(r'^xml', views.xml,name="xml"),
    url(r'^json', views.json,name="json"),
    url(r'^csv', views.export,name="csv"),

]