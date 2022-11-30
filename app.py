# This is the entry point of the application 
import sys
import os
import dateutil.parser as dparser
sys.path.append(os.getcwd())
import logging
import time
from time import gmtime, strftime
from datetime import *

import json
import boto3
import pandas as pd



# importing module

logging.basicConfig(filename="log_file.log", format='%(asctime)s %(message)s', filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

# Checking credentials 


def print_profile_info():

     client = boto3.client('sts')
     response = client.get_caller_identity()
     user_id = response['UserId']
     account = response['Account']
     arn = response['Arn']
     output = {
          'UserId': user_id,
          'Account': account,
          'Arn': arn
     }

     print(json.dumps(output, indent=4))

# Start configuration
if __name__ == "__main__":

     print_profile_info()

     ENVIRONMENT = os.environ.get('ENV')
     BUCKET = os.environ.get('BUCKET')
     # print('ENVIRONMENT VARIABLES : {}'.format(os.environ))

     if ENVIRONMENT == 'development':
          bucket = 'carbonstream-development'
          print('Environment set. Setting bucket  : {} '.format(bucket))

     elif ENVIRONMENT == 'staging':
          bucket = 'carbonstream-staging'
          print('Environment set. Setting bucket  : {} '.format(bucket))

     elif ENVIRONMENT == 'production':
          bucket = 'carbonstream-production'
          print('Environment set. Setting bucket  : {} '.format(bucket))   

     else:
          print('Environment not set. Setting bucket (test bucket) : scam-fraud-development-local ')
          bucket = 'carbonstream-development'

     