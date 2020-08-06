#!/bin/bash
gcloud functions deploy $CLOUD_FUNCTION_NAME --runtime=nodejs10 --region=$CLOUD_REGION --entry-point=main --trigger-topic=$PUBSUB_TOPIC_NAME
