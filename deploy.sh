yarn build
gcloud config set project onethingorg
gsutil cp -R build/* gs://1thing.org