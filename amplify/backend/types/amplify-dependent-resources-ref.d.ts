export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "ampf680c775": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "ndriversGroupRole": "string",
            "ncustomersGroupRole": "string"
        }
    },
    "api": {
        "amp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "filestorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}