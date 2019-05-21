from django.shortcuts import render
from .models import Comentari
import folium
# Create your views here.
def index(request):
    return render(request,'campingbike/index.html')

def familiar(request):
    rutes = Comentari.objects.filter(tipus='F')
    return render(request,'campingbike/familiar.html',{'Rutes':rutes})

def parelles(request):
    rutes = Comentari.objects.filter(tipus='P')
    return render(request,'campingbike/parelles.html',{'Rutes':rutes})

def endurance(request):
    rutes = Comentari.objects.filter(tipus='E')
    return render(request,'campingbike/endurance.html',{'Rutes':rutes})

def get_endurance(request):
    rutes = Comentari.objects.filter(tipus='E').values('tipus', 'temps', 'km', 'link', 'imatge', 'opinio')
    rutes_list = list(rutes)
    return JsonResponse(rutes_list, safe= False)

def maps(request):
    return render(request,'campingbike/maps.html')

def experiencies(request):
    return render(request,'campingbike/experiencies.html')

from django.http import JsonResponse,HttpResponse
from django.core import serializers

def xml(request):
    data = Comentari.objects.all()
    data = serializers.serialize('xml',data)
    return HttpResponse(data, content_type="application/xml")

def json(request):
    data = Comentari.objects.all().values('tipus', 'temps', 'km', 'link', 'imatge', 'opinio')
    rutes_list = list(data)
    return JsonResponse(rutes_list, safe= False)

from .resources import RutaResource

def export(request):
    ruta_resource = RutaResource()
    dataset = ruta_resource.export()
    response = HttpResponse(dataset.csv, content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="rutes.csv"'
    return response

def descarrega(request):
    return render(request,'campingbike/descarrega.html')