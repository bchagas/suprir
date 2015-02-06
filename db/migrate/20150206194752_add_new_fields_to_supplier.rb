class AddNewFieldsToSupplier < ActiveRecord::Migration
  def change
    add_column :suppliers, :first_name, :string
    add_column :suppliers, :last_name, :string
    add_column :suppliers, :phone_number, :string
    add_column :suppliers, :description, :text
    add_column :suppliers, :service_products, :text
    add_column :suppliers, :state, :string
    add_column :suppliers, :city, :string
    add_column :suppliers, :address, :string
    add_column :suppliers, :website, :string
  end
end
