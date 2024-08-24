yarn build
gcloud config set project onethingorg
gsutil cp -R build/* gs://test.1thing.org