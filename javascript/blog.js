var keyBlog = 'blogList'

function taoBlog(nameUser,comment){
    var blog = new Object();
    blog.name = nameUser;
    blog.comment = comment;

    return blog;
}

function luuListBlog(blogList) {
    var jsonBlogList = JSON.stringify(blogList);

    localStorage.setItem(keyBlog, jsonBlogList);
}

function layListBlog() {
    var blogList = new Array();

    var jsonBlogList = localStorage.getItem(keyBlog);

    if(jsonBlogList != null){
        blogList = JSON.parse(jsonBlogList);
    }

    return blogList;
}

function layListBlogFromLocalStorage() {
    var jsonBlogList = localStorage.getItem('blogList');
    var blogList = JSON.parse(jsonBlogList);
    return blogList
}
