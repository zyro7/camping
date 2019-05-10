from import_export import resources
from .models import Ruta

class RutaResource(resources.ModelResource):
    class Meta:
        model = Ruta