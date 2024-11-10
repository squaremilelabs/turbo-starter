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
                }, created_by_user_id: {
                    name: "created_by_user_id",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    defaultValueProvider: $default$Item$created_by_user_id,
                }, created_by_user_email: {
                    name: "created_by_user_email",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    defaultValueProvider: $default$Item$created_by_user_email,
                }, last_updated_at: {
                    name: "last_updated_at",
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
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, banned: {
                    name: "banned",
                    type: "Boolean",
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, last_sign_in_at: {
                    name: "last_sign_in_at",
                    type: "DateTime",
                    isOptional: true,
                }, primary_email: {
                    name: "primary_email",
                    type: "String",
                    isOptional: true,
                }, primary_phone: {
                    name: "primary_phone",
                    type: "String",
                    isOptional: true,
                }, private_metadata: {
                    name: "private_metadata",
                    type: "UserPrivateMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, public_metadata: {
                    name: "public_metadata",
                    type: "UserPublicMetadata",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'user',
                }, unsafe_metadata: {
                    name: "unsafe_metadata",
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
                }, user_id: {
                    name: "user_id",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'private_metadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "user_id" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, user_id: {
                    name: "user_id",
                    fields: ["user_id"]
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
                }, user_id: {
                    name: "user_id",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'public_metadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "user_id" },
                }, is_super_admin: {
                    name: "is_super_admin",
                    type: "Boolean",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, user_id: {
                    name: "user_id",
                    fields: ["user_id"]
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
                }, user_id: {
                    name: "user_id",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'unsafe_metadata',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "user_id" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, user_id: {
                    name: "user_id",
                    fields: ["user_id"]
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
function $default$Item$created_by_user_id(user: any): unknown {
    return user?.id;
}

function $default$Item$created_by_user_email(user: any): unknown {
    return user?.primary_email;
}
export default metadata;
