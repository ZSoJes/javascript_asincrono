class CreatePost < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :author
      t.string :comment
    end
  end
end
