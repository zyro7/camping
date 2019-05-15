from import_export import resources
from .models import Comentari

class RutaResource(resources.ModelResource):
    class Meta:
        model = Comentari