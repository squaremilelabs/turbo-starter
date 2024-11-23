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
        clerkUserPublicMetadata: {
            name: 'ClerkUserPublicMetadata', fields: {
                userId: {
                    name: "userId",
                    type: "String",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "ClerkUser",
                    isDataModel: true,
                    backLink: 'publicMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, is_super_admin: {
                    name: "is_super_admin",
                    type: "Boolean",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                userId: {
                    name: "userId",
                    fields: ["userId"]
                },
            }
            ,
        }
        ,
        clerkUserPrivateMetadata: {
            name: 'ClerkUserPrivateMetadata', fields: {
                userId: {
                    name: "userId",
                    type: "String",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "ClerkUser",
                    isDataModel: true,
                    backLink: 'privateMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, api_key: {
                    name: "api_key",
                    type: "String",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                userId: {
                    name: "userId",
                    fields: ["userId"]
                },
            }
            ,
        }
        ,
        clerkUserUnsafeMetadata: {
            name: 'ClerkUserUnsafeMetadata', fields: {
                userId: {
                    name: "userId",
                    type: "String",
                    isId: true,
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "ClerkUser",
                    isDataModel: true,
                    backLink: 'unsafeMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                userId: {
                    name: "userId",
                    fields: ["userId"]
                },
            }
            ,
        }
        ,
        clerkUser: {
            name: 'ClerkUser', fields: {
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
                    isForeignKey: true,
                    relationField: 'primaryEmailAddress',
                }, primaryEmailAddress: {
                    name: "primaryEmailAddress",
                    type: "ClerkEmailAddress",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'primaryForUser',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "primaryEmailAddressId" },
                }, primaryPhoneNumberId: {
                    name: "primaryPhoneNumberId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'primaryPhoneNumber',
                }, primaryPhoneNumber: {
                    name: "primaryPhoneNumber",
                    type: "ClerkPhoneNumber",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'primaryForUser',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "primaryPhoneNumberId" },
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
                    type: "ClerkUserPublicMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, privateMetadata: {
                    name: "privateMetadata",
                    type: "ClerkUserPrivateMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, unsafeMetadata: {
                    name: "unsafeMetadata",
                    type: "ClerkUserUnsafeMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, emailAddresses: {
                    name: "emailAddresses",
                    type: "ClerkEmailAddress",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, phoneNumbers: {
                    name: "phoneNumbers",
                    type: "ClerkPhoneNumber",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
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
                }, primaryEmailAddressId: {
                    name: "primaryEmailAddressId",
                    fields: ["primaryEmailAddressId"]
                }, primaryPhoneNumberId: {
                    name: "primaryPhoneNumberId",
                    fields: ["primaryPhoneNumberId"]
                },
            }
            ,
        }
        ,
        clerkEmailAddress: {
            name: 'ClerkEmailAddress', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, emailAddress: {
                    name: "emailAddress",
                    type: "String",
                }, verification: {
                    name: "verification",
                    type: "ClerkVerification",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'EmailAddress',
                }, user: {
                    name: "user",
                    type: "ClerkUser",
                    isDataModel: true,
                    backLink: 'emailAddresses',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, primaryForUser: {
                    name: "primaryForUser",
                    type: "ClerkUser",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'primaryEmailAddress',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, userId: {
                    name: "userId",
                    fields: ["userId"]
                },
            }
            ,
        }
        ,
        clerkPhoneNumber: {
            name: 'ClerkPhoneNumber', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, phoneNumber: {
                    name: "phoneNumber",
                    type: "String",
                }, reservedForSecondFactor: {
                    name: "reservedForSecondFactor",
                    type: "Boolean",
                }, defaultSecondFactor: {
                    name: "defaultSecondFactor",
                    type: "Boolean",
                }, verification: {
                    name: "verification",
                    type: "ClerkVerification",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'phoneNumber',
                }, user: {
                    name: "user",
                    type: "ClerkUser",
                    isDataModel: true,
                    backLink: 'phoneNumbers',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, primaryForUser: {
                    name: "primaryForUser",
                    type: "ClerkUser",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'primaryPhoneNumber',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, userId: {
                    name: "userId",
                    fields: ["userId"]
                },
            }
            ,
        }
        ,
        clerkVerification: {
            name: 'ClerkVerification', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, emailAddressId: {
                    name: "emailAddressId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'EmailAddress',
                }, phoneNumberId: {
                    name: "phoneNumberId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'phoneNumber',
                }, status: {
                    name: "status",
                    type: "ClerkVerificationStatus",
                }, EmailAddress: {
                    name: "EmailAddress",
                    type: "ClerkEmailAddress",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'verification',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "emailAddressId" },
                }, phoneNumber: {
                    name: "phoneNumber",
                    type: "ClerkPhoneNumber",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'verification',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "phoneNumberId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, emailAddressId: {
                    name: "emailAddressId",
                    fields: ["emailAddressId"]
                }, phoneNumberId: {
                    name: "phoneNumberId",
                    fields: ["phoneNumberId"]
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
    authModel: 'ClerkUser'
};
export default metadata;
