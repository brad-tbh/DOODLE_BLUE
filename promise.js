const admission  = Promise((resolve, reject) => {
    const marks = 85;

    if (marks >= 50) {
        resolve("Admission approved");
    } else {
        reject(new Error("Admission Rejected"));
    }
});

admission
 .then((result) => console.log(result))
 .catch((error) => console.log(error.message))
 .finally(() => console.log("Application completed"))