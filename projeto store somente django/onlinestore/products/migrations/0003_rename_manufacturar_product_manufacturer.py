# Generated by Django 4.2.5 on 2023-09-29 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_product_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='manufacturar',
            new_name='manufacturer',
        ),
    ]