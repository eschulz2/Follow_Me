Koudoku.setup do |config|
  config.webhooks_api_key = "577733eb-7f1e-4db6-94d2-32eb0c604fba"
  config.subscriptions_owned_by = :user
  config.stripe_publishable_key = ENV['STRIPE_PUBLISHABLE_KEY']
  config.stripe_secret_key = ENV['STRIPE_SECRET_KEY']
  # config.free_trial_length = 30
end
