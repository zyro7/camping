from django_cron import CronJobBase, Schedule

class MyCronJob(CronJobBase):
    RUN_EVERY_MINS = 120 # every 2 hours

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)

    def do(self):
        from campingbike.models import Comentari, Ruta
        comentaris = Comentari.objects.all()
        llista = []
        for x in comentaris:
            llista =llista + [{"comentari":x.comentari,"temps":x.temps,
                               "km":x.km,"link":x.link,"imatge":x.imatge,
                               "opinio":x.opinio}]
        import json
        a = json.dumps(llista)
        f = open("campingbike/backup.txt", "w")
        f.write(a)
        f.close()