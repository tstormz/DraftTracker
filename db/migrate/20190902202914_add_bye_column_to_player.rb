class AddByeColumnToPlayer < ActiveRecord::Migration[5.2]
  def up
    add_column :players, :bye, :integer
  end

  def down
    remove_column :players, :bye
  end
end
