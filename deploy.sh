#!/bin/bash
gcloud functions deploy $CLOUD_FUNCTION_NAME --runtime=nodejs12 --env-vars-file=.env.yaml --entry-point=main --trigger-topic=$PUBSUB_TOPIC_NAME
