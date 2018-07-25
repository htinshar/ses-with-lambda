## SOURCE CODE SAMPLE
This source code is to send transaction email with AWS lambda and set up `SAM` for local development 

## PREREQUISITIES FOR SERVERLESS FRAMEWORK

- Install serverless in local `https://serverless.com/framework/docs/getting-started/`
- Set up aws credentials  `https://serverless.com/framework/docs/providers/aws/guide/credentials/`

## PREREQUISITIES FOR LOCAL DEVELOPMENT WITH SAM

- Install `Python` . `https://www.python.org/downloads/`
- Install `Docker`. `https://docs.docker.com/install/`
- Install `SAM` in local . `https://docs.aws.amazon.com/lambda/latest/dg/sam-cli-requirements.html`


## Configuration

- After you install all of the above requirement, install require package `npm install`. 
- Enter the source code folder. And then find the folder name `config`. In that folder there is the `dev.yml` file (you can also create your environment as file name but you need to deploy your serverless package with your environment). In that file, change `recipient email`, `access_key_id`, `access_key_secret` and `region` to your desire email.

## Testing in Local

You can test this lambda function locally. In order to do that, follow this step.

- Type `sls sam export -o template.yml` in your source code folder, than all of you changes in `dev.yml` file will sync to `SAM` defination file.
- Type `sam local start-api` and then you can test your lambda function in your local with `http://localhost:3000/mail?username=TEST-INLOCAL&email=testinlocal0909@gmail.com`

Then transaction email will send your email inbox.

## OTHERS

I was create `DKIM` record for my domain and set up in `SES` console. If you want to test with your own domain, change `sender` value to your `dkim identified email`.

I was manually created `metric logs` for email `open, click, send` events. So, `metrics` can check manually on cloud watch dashboard.

 



