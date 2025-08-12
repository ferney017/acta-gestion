from django.db import models

# Create your models here.
class act(models.Model):
    nombre = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateTimeField( auto_now_add=True)
    updated = models.DateTimeField( auto_now_add=True) 
    
    
    def _str__(self):
        return self.nombre