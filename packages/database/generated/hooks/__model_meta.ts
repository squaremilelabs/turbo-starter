/* eslint-disable */
const metadata = {
    models: {
        item: {
            name: 'Item', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updated_at: {
                    name: "updated_at",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, title: {
                    name: "title",
                    type: "String",
                }, image_url: {
                    name: "image_url",
                    type: "String",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, title: {
                    name: "title",
                    fields: ["title"]
                },
            }
            ,
        }
        ,
        backendClerkUser: {
            name: 'BackendClerkUser', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, passwordEnabled: {
                    name: "passwordEnabled",
                    type: "Boolean",
                }, totpEnabled: {
                    name: "totpEnabled",
                    type: "Boolean",
                }, backupCodeEnabled: {
                    name: "backupCodeEnabled",
                    type: "Boolean",
                }, twoFactorEnabled: {
                    name: "twoFactorEnabled",
                    type: "Boolean",
                }, banned: {
                    name: "banned",
                    type: "Boolean",
                }, locked: {
                    name: "locked",
                    type: "Boolean",
                }, createdAt: {
                    name: "createdAt",
                    type: "Int",
                }, updatedAt: {
                    name: "updatedAt",
                    type: "Int",
                }, imageUrl: {
                    name: "imageUrl",
                    type: "String",
                }, hasImage: {
                    name: "hasImage",
                    type: "Boolean",
                }, primaryEmailAddressId: {
                    name: "primaryEmailAddressId",
                    type: "String",
                    isOptional: true,
                }, primaryEmailAddress: {
                    name: "primaryEmailAddress",
                    type: "Json",
                    isOptional: true,
                }, primaryPhoneNumberId: {
                    name: "primaryPhoneNumberId",
                    type: "String",
                    isOptional: true,
                }, primaryPhoneNumber: {
                    name: "primaryPhoneNumber",
                    type: "Json",
                    isOptional: true,
                }, primaryWeb3WalletId: {
                    name: "primaryWeb3WalletId",
                    type: "String",
                    isOptional: true,
                }, primaryWeb3Wallet: {
                    name: "primaryWeb3Wallet",
                    type: "Json",
                    isOptional: true,
                }, lastSignInAt: {
                    name: "lastSignInAt",
                    type: "Int",
                    isOptional: true,
                }, externalId: {
                    name: "externalId",
                    type: "String",
                    isOptional: true,
                }, username: {
                    name: "username",
                    type: "String",
                    isOptional: true,
                }, firstName: {
                    name: "firstName",
                    type: "String",
                    isOptional: true,
                }, lastName: {
                    name: "lastName",
                    type: "String",
                    isOptional: true,
                }, fullName: {
                    name: "fullName",
                    type: "String",
                    isOptional: true,
                }, publicMetadata: {
                    name: "publicMetadata",
                    type: "Json",
                }, privateMetadata: {
                    name: "privateMetadata",
                    type: "Json",
                }, unsafeMetadata: {
                    name: "unsafeMetadata",
                    type: "Json",
                }, emailAddresses: {
                    name: "emailAddresses",
                    type: "Json",
                    isArray: true,
                }, phoneNumbers: {
                    name: "phoneNumbers",
                    type: "Json",
                    isArray: true,
                }, web3Wallets: {
                    name: "web3Wallets",
                    type: "Json",
                    isArray: true,
                }, externalAccounts: {
                    name: "externalAccounts",
                    type: "Json",
                    isArray: true,
                }, samlAccounts: {
                    name: "samlAccounts",
                    type: "Json",
                    isArray: true,
                }, lastActiveAt: {
                    name: "lastActiveAt",
                    type: "Int",
                    isOptional: true,
                }, createOrganizationEnabled: {
                    name: "createOrganizationEnabled",
                    type: "Boolean",
                }, createOrganizationsLimit: {
                    name: "createOrganizationsLimit",
                    type: "Int",
                    isOptional: true,
                }, deleteSelfEnabled: {
                    name: "deleteSelfEnabled",
                    type: "Boolean",
                }, legalAcceptedAt: {
                    name: "legalAcceptedAt",
                    type: "Int",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
    authModel: 'BackendClerkUser'
};
export default metadata;
