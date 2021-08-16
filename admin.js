const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const User = require("./models/User");
const Category = require("./models/Category");
const Post = require("./models/Post");

const contentNavigation = {
    name: "TABA3'NI",
    icon: "Success",
};
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: "/admin",
    //   resources: [
    //     {
    //       resource: User, Profile,
    //       options: {
    //         // We'll add this later
    //       },

    //     }
    //   ],
    resources: [
        {
            resource: User,
            options: { navigation: contentNavigation },
            properties: {
                username: {
                    isVisible: {
                        list: true,
                        filter: true,
                        show: true,
                        edit: false,
                    },
                },
                email: {
                    isVisible: {
                        list: true,
                        filter: true,
                        show: true,
                        edit: false,
                    },
                },
                password: {
                    isVisible: {
                        list: false,
                        filter: false,
                        show: false,
                        edit: false,
                    },
                },
                profilePic: {
                    isVisible: {
                        list: false,
                        filter: false,
                        show: true,
                        edit: false,
                    },
                },
            },
        },
        {
            resource: Category,
            options: { navigation: contentNavigation },
        },
        { resource: Post, options: { navigation: contentNavigation } },
    ],
    branding: {
        companyName: "TABA3'NI",
    },
    preventAssignment: true,
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
