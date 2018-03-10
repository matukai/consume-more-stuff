UploadImage

STEPS FOR IMAGE UPLOAD
1. create item
2. save image
3. update item

note: ImageUpload container not currently being used... everything is in NewItem

-Images uploading to '/public/images' locally 
however not rendering or stored in db

-Front end

NewItem:
-possible wrong use with formData in NewItem submitHandler
-issues with pulling data off of formData
-selectedFile is the image object

Server:
-added multer & uuidv4
-note destination for saved images 'public/uploads'
-post route in server.js

ItemAction:
-error when posting, no category_id found

After the new item has been saved, save the image with the id,
returned from the saved item... do a conditional check if there is an id (if the item was successfully saved or not) if there is, .set image with item id... note: this must be done after the item is saved otherwise there will be no id

db should look something like
'/uploads/items/12/filename.png

html will look something like this
src="/upload/items/12"

sorry we could not figure this out in time
happy hacking :)

blog post we were following for image upload
https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html