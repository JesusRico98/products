class Product{
    constructor(name,price,quantity,date){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.date=date;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML=`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product:</strong> ${product.name}
                <strong>Product Quantity:</strong> ${product.quantity}
                <strong>Product Price:</strong> ${product.price}
                <strong>Product Date:</strong> ${product.date}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element)
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.remove()
        }
    }

    showMessage(message, cssClass){
        const element = document.createElement('div')
        element.className=`alert alert-${cssClass} mt-2`
        element.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container')
        const app = document.querySelector('#app')
        container.insertBefore(element,app)

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit',function(e){
    e.preventDefault()
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const quantity = document.getElementById('quantity').value
    const year = document.getElementById('year').value
    const ui=new UI()
    const product =new Product(
        name,
        price,
        quantity,
        year
    )
    if(name==='' || price==='' || quantity==='' || year==='') return ui.showMessage('Complete the fields','danger')
    ui.addProduct(product)
    ui.showMessage('Product Added','success')
    ui.resetForm()
})

document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI()
    ui.deleteProduct(e.target)
    ui.showMessage('Product Deleted','danger')
})