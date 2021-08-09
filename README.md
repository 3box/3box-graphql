# ⚠️ ⚠️ Deprecated in favor of Ceramic ⚠️ ⚠️ 
> 3box.js and related tools built by 3Box Labs are deprecated and no loger supported. Developers are encurraged to build with https://ceramic.network which is a more secure and decentralized protocol for sovereign data.

 [Endpoint](#endpoint) | [Requests](#requests) | [Schema](#schema) | [Running & Deployment](#run)

# 3Box GraphQL

A 3Box GraphQL service. Run against our [profile caching service and pinning node](https://github.com/3box/3box-pinning-server) to offer an easy to use query language for Ethereum profiles. This service is configured as an AWS Lambda function.

## <a name="endpoint"></a>Endpoint

The 3BoxGraphQL service run by 3Box is available at the following endpoint.

```
https://api.3box.io/graph
```

## <a name="requests"></a> Requests

Request:

```bash
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ profile(id: \"0xe3b281f3dd2b87c7b3eacc0402a4fd7d827f2956\") { name } }" }' \
  https://api.3box.io/graph
```
Response (body):

```
{"data":{"profile":{"name":"Zach"}}}
```

## <a name="schema"></a> Schema

A Profile schema is defined along with queries for both a profile and list of profiles. This schema is evolving and intended to remain minimal for now. Profiles are not necessarily strictly defined, as users and apps can add any fields of interest. This schema represents a minimally shared set of common fields you are likely to find available. Fields not available will return null if requested.

Profile Object:

```
type Profile {
  name: String
  image: String
  emoji: String
  description: String
  eth_address: String
  did: String
  location: String
  website: String
  proof_github: String
  proof_twitter: String
  proof_did: String
  proof_eth_address: String
}
```

Queries for a profile of profiles list by profile id (ethereum address):

```
type Query {
  profiles(ids: [String]!): [Profile]
  profile(id: String!): Profile
}
```

## <a name="run"></a> Running and Deployment

You can run and deploy this service with [serverless](https://www.npmjs.com/package/serverless).

To run locally:

```bash
$ serverless offline start
```

To deploy: (must also have AWS keys configured)
```bash
$ serverless deploy
```

## Maintainers
[@zachferland](https://github.com/zachferland)
