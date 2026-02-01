(function() {
    emailjs.init("tyjWA79G-_NJdKJos");  // 用你自己的 User ID 替换
})();

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 收集表单数据
    var feedbackData = {
        "name": document.getElementById("name").value,
        "culture-heritage": document.getElementById("culture-heritage").value,
        "usability": document.getElementById("usability").value,
        "purchase-intent": document.getElementById("purchase-intent").value,
        "comments": document.getElementById("comments").value,
        "time": new Date().toLocaleString() // 提交时间
    };

    // 发送数据到 emailJS
    emailjs.send("service_vmqgvze", "template_1f7ndmz", feedbackData)
        .then(function(response) {
            alert("反馈提交成功！感谢您的参与！");
            document.getElementById("feedback-form").reset();
        }, function(error) {
            alert("提交失败，请稍后再试。");
            console.error("邮件发送失败:", error);
            document.getElementById("feedback-form").reset();
        });
});

// 试用请求表单提交处理
document.getElementById("trial-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 收集试用请求数据
    var trialRequestData = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "request-details": document.getElementById("request-details").value,
        "time": new Date().toLocaleString() // 提交时间
    };

    // 发送数据到 emailJS
    emailjs.send("service_vmqgvze", "template_1f7ndmz", trialRequestData)
        .then(function(response) {
            alert("试用请求已提交！我们会尽快联系您。");
            document.getElementById("feedback-form").reset();
        }, function(error) {
            alert("提交失败，请稍后再试。");
            console.error("邮件发送失败:", error);
            document.getElementById("feedback-form").reset();
        });
});
