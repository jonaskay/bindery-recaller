#!/bin/bash
gcloud functions deploy $CLOUD_FUNCTION_NAME --runtime=nodejs12 --region=$CLOUD_REGION --entry-point=main --env-vars-file=.env.yaml --trigger-topic=$PUBSUB_TOPIC_NAME
