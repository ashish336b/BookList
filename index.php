<?php include 'header.php'?>
<div class="container mt-3">
    <h1 class="display-3 text-center"><i class="fas fa-book-open text-primary"></i>My<span
            class="text-primary">Book</span>List</h1>
</div>
<div class="container myform-container md-5">
    <form id="book-form">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" class="form-control">
        </div>
        <div class="form-group">
            <label for="author">Author</label>
            <input type="text" name="author" id="author" class="form-control">
        </div>
        <div class="form-group">
            <label for="isbn">ISBN#</label>
            <input type="text" name="isbn" id="isbn" class="form-control">
        </div>
        <input type="submit" value="Add Book" class="btn btn-primary btn-block">
    </form>
</div>
<div class="container mt-5">
    <table class="table table-striped table-bordered table-hover" id="book-table">
        <thead class="table-dark">
            <tr>
                <th>title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="book-list">
        
        </tbody>
    </table>
</div>
<script src="app.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
  src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"
  integrity="sha256-0YPKAwZP7Mp3ALMRVB2i8GXeEndvCq3eSl/WsAl1Ryk="
  crossorigin="anonymous"></script>
<!-- MDBootstrap Datatables  -->
<script type="text/javascript" src="js/addons/datatables.min.js"></script>
</body>

</html>
