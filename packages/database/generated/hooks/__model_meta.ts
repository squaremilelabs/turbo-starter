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
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    defaultValueProvider: $default$Item$createdById,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, lastUpdatedAt: {
                    name: "lastUpdatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, title: {
                    name: "title",
                    type: "String",
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
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, banned: {
                    name: "banned",
                    type: "Boolean",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                }, lastSignInAt: {
                    name: "lastSignInAt",
                    type: "DateTime",
                    isOptional: true,
                }, primaryEmailAddress: {
                    name: "primaryEmailAddress",
                    type: "String",
                    isOptional: true,
                }, primaryPhoneNumber: {
                    name: "primaryPhoneNumber",
                    type: "String",
                    isOptional: true,
                }, privateMetadata: {
                    name: "privateMetadata",
                    type: "UserPrivateMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, publicMetadata: {
                    name: "publicMetadata",
                    type: "UserPublicMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, unsafeMetadata: {
                    name: "unsafeMetadata",
                    type: "UserUnsafeMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
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
        userPrivateMetadata: {
            name: 'UserPrivateMetadata', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'privateMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
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
        userPublicMetadata: {
            name: 'UserPublicMetadata', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'publicMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, isAdmin: {
                    name: "isAdmin",
                    type: "Boolean",
                    isOptional: true,
                }, isAuthorized: {
                    name: "isAuthorized",
                    type: "Boolean",
                    isOptional: true,
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
        userUnsafeMetadata: {
            name: 'UserUnsafeMetadata', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'unsafeMetadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
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
    }
    ,
    deleteCascade: {
    }
    ,
    authModel: 'User'
};
function $default$Item$createdById(user: any): unknown {
    return user?.id;
}
export default metadata;
