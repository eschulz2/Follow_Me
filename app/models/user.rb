class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         after_create :create_a_customer

  # def name
  #   [first_name, last_name].compact.join(' ')
  # end
  def create_a_customer
  	token = self.stripe_card_token

  	customer = Stripe::Customer.create(
  		:card => token,
  		:plan => '120',
  		:email => self.email
  		)
  end

end
