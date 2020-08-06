#!/bin/bash
gcloud functions deploy $CLOUD_FUNCTION_NAME --trigger-topic $PUBSUB_TOPIC_NAME --env-vars-file .env.yaml --runtime nodejs12
