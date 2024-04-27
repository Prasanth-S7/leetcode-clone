import mongoose from "mongoose";
const { Schema } = mongoose;

export const createConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://prasanth:prasanth123@cluster0.8hc8fbf.mongodb.net/leetcode-clone");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const userSchema = new Schema({
    username: String,
    date: { type: Date, default: Date.now }
});

const problemSchema = new Schema({
    title: String,
    tag:String,
    description: String,
    defaultCode: [
        {
            language: {type:String,default:"js"},
            code: {type:String,default:"funtion codeFun(){}"}
        },
        {
            language:{type:String,default:"js"},
            code:{type:String,default:"def codeFun():"}
        }
    ],
    testCases: [
        {
            input: String,
            output: String
        }
    ]
});

const submissionSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    language: String,
    timeTaken: String,
    problemId: [{ type: Schema.Types.ObjectId, ref: "Problem" }]
});

export const User = mongoose.model("User", userSchema);
export const Problem = mongoose.model("Problem", problemSchema);
export const Submission = mongoose.model("Submission", submissionSchema);
